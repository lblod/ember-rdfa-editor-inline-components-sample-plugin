import { action } from '@ember/object';
import Component from '@glimmer/component';
import { InlineComponentArgs } from '@lblod/ember-rdfa-editor/model/inline-components/inline-component-controller';
import {
  Properties,
  State,
} from '@lblod/ember-rdfa-editor/model/inline-components/model-inline-component';

export interface CounterState extends State {
  count: number;
}

export default class InlineComponentsCounter extends Component<
  InlineComponentArgs<Properties, CounterState>
> {
  get componentController() {
    return this.args.componentController;
  }

  @action
  click() {
    this.componentController.setStateProperty('count', this.count + 1);
  }

  get count(): number {
    return (this.componentController.getStateProperty('count') as number) || 0;
  }
}
