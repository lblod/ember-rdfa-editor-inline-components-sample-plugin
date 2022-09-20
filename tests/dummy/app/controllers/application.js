import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @tracked rdfaEditor;
  plugins = ['rdfa-ic-sample'];

  @action
  rdfaEditorInit(rdfaEditor) {
    const presetContent = localStorage.getItem('EDITOR_CONTENT') ?? '';
    console.log('PRESET', presetContent);
    this.rdfaEditor = rdfaEditor;
    this.rdfaEditor.setHtmlContent(presetContent);
    const editorDone = new CustomEvent('editor-done');
    window.dispatchEvent(editorDone);
  }
}
