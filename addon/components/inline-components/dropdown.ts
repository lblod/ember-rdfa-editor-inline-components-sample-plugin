import InlineComponent from '@lblod/ember-rdfa-editor/components/inline-components/inline-component';

export default class InlineComponentsRegulatoryAttachment extends InlineComponent {
  get title() {
    return 'Example Regulatory Attachment';
  }

  get articles() {
    return [1, 2, 3, 4, 5, 6, 7].map((i) => `Article ${i}`);
  }
}
