import CounterSpec from './models/inline-components/counter';
import DropdownSpec from './models/inline-components/dropdown';

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
    controller.registerInlineComponent(new CounterSpec());
    controller.registerInlineComponent(new DropdownSpec());
  }

  // modelWrittenHandler(event) {
  //   if (event.owner !== this.name) {
  //     //TODO implement automatically date recognition and insertion
  //   }
  // }
}
