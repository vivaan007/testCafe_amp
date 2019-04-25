import { Selector, t } from 'testcafe';

const label = Selector('label');

class Feature {
  constructor(text) {
    this.label = label.withText(text);
    this.checkbox = this.label.find('input[type=checkbox]');
  }
}

export default class Page {
  constructor() {
    this.nameInput = Selector('#developer-name');

    this.featureList = [
      new Feature('Support for testing on remote devices'),
      new Feature('Re-using existing JavaScript code for testing'),
      new Feature('Easy embedding into a Continuous integration system')
    ];

    this.submitButton = Selector('#submit-button');
  }

  async submitName(name) {
    await t
      .typeText(this.nameInput, name)
      .click(this.submitButton);
  }
}
