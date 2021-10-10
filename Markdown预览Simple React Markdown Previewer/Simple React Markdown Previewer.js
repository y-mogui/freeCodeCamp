class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      markdown: placeholder,
      editorMax: false,
      previewerMax: false
    };
    this.handleChange=this.handleChange.bind(this);
    this.handleEditorMax=this.handleEditorMax.bind(this);
    this.handlePreviewMax=this.handlePreviewMax.bind(this);
  }
  handleChange(e) {
    this.setState({
      markdown: e.target.value
    });
  }
  handleEditorMax() {
    this.setState({
      editorMax: this.state.editorMax
    })
  }
  handlePreviewMax() {
    this.setState({
      previewMax: this.state.previewMax
    })
  }
  render() {
    const classes = this.state.editorMaximized
      ? ['editorWrap maximized', 'previewWrap hide', 'fa fa-compress']
      : this.state.previewMaximized
      ? ['editorWrap hide', 'previewWrap maximized', 'fa fa-compress']
      : ['editorWrap', 'previewWrap', 'fa fa-arrows-alt'];
    return (
      <div>
        <div className={classes[0]}>
          <Toolbar
            icon={classes[2]}
            onClick={this.handleEditorMaximize}
            text="Editor"
          />
          <Editor markdown={this.state.markdown} onChange={this.handleChange} />
        </div>
        <div className="converter" />
        <div className={classes[1]}>
          <Toolbar
            icon={classes[2]}
            onClick={this.handlePreviewMaximize}
            text="Previewer"
          />
          <Preview markdown={this.state.markdown} />
        </div>
      </div>
    );
  }
};

const Toolbar = (props) => {
  return (
    <div class="toolbar">
      {props.text}
    </div>
  );
};

const Editor = (props) => {
  return (
    <textarea 
      id="editor"
      onClick={props.onChange}
      type="text"
      velue={props.markdown}/>
  );
};

const Preview = (props) => {
  return (
      <div
      dangerouslySetInnerHTML={{
        __html: marked(props.markdown, { renderer: renderer })
      }}
      id="preview"
    />
  );
};

ReactDOM.render(<App />, document.getElementById('app'));