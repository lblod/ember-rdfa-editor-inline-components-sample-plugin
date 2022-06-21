import CounterSpec from './models/inline-components/counter';
import DropdownSpec from './models/inline-components/dropdown';
import ImageSpec from './models/inline-components/image';

export default class RdfaIcSamplePlugin {
  controller;

  get name() {
    return 'rdfa-ic-sample';
  }

  initialize(controller) {
    this.controller = controller;
    controller.registerWidget({
      componentName: 'rdfa-ic-plugin-insert',
      identifier: 'rdfa-ic-plugin/insert',
      desiredLocation: 'insertSidebar',
    });
    controller.registerInlineComponent(new CounterSpec(this.controller));
    controller.registerInlineComponent(new DropdownSpec(this.controller));
    controller.registerInlineComponent(new ImageSpec(this.controller));
  }
}
