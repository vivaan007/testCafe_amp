import Page from '../pageObject/samplePage';
import { Selector, t } from 'testcafe';

fixture`My fixture`
  .page`https://devexpress.github.io/testcafe/example/`;

const page = new Page();

test('Text typing basics', async t => {
  await t
    .typeText(page.nameInput, 'Peter')
    .setTestSpeed(0.1)
    .typeText(page.nameInput, 'Paker', { replace: true })
    .typeText(page.nameInput, 'r', { caretPos: 2 })
    .expect(page.nameInput.value).eql('Parker');
});

test('Click check boxes and then verify their state', async t => {
  for (const feature of page.featureList) {
    await t
      .click(feature.label)
      .expect(feature.checkbox.checked).ok();
  }
});

test('Submit a developer name and check the header', async t => {
  const header = Selector('#article-header');

  await page.submitName('Peter');

  await t.expect(header.innerText).eql('Thank you, Peter!');
});