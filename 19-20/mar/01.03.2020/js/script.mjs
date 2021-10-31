import Tabs from './MakeTabs.mjs';

const tabsContent = [
  'lorem',
  'ipsum',
  'dolor'
];

const gogi = new Tabs({
  containerSelector: '.new-tabs',
  tabsNames: ['1','2','3'],
  contentItems: [
    ...tabsContent.map(i => {
      const tab = document.createElement('p');
      tab.innerText = i;
      return tab
    })
  ],
});