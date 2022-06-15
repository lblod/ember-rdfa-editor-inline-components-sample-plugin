import { action } from '@ember/object';
import Component from '@glimmer/component';
import { InlineComponentArgs } from '@lblod/ember-rdfa-editor/model/inline-components/inline-component-controller';
import {
  Properties,
  State,
} from '@lblod/ember-rdfa-editor/model/inline-components/model-inline-component';

export interface ImageProps extends Properties {
  imageUrl: string;
}

export interface ImageState extends State {
  selected: boolean;
}

export default class InlineComponentsImage extends Component<
  InlineComponentArgs<ImageProps, ImageState>
> {
  get componentController() {
    return this.args.componentController;
  }
  get image() {
    return this.componentController.props.imageUrl;
  }

  get selected() {
    return (
      (this.componentController.getStateProperty('selected') as boolean) ||
      false
    );
  }

  @action
  select() {
    this.componentController.setStateProperty('selected', true);
  }
}
