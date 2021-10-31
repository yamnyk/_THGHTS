class MakeTabs {
  constructor({tabsNames, contentItems, containerSelector, isIndexesMatch, contentOrder}) {
    const checkType = (objToCheck, type) => {
      if (objToCheck instanceof type) {
        throw new TypeError(`Wrong argument type - ${objToCheck}`)
      } else {
        return objToCheck
      }
    };
    
    this.tabsNames = checkType(tabsNames, Array);
    this.content = checkType(contentItems, Array);
    this.containerSelector = containerSelector;
    this.isIndexesMatch = isIndexesMatch;
    this.contentOrder = contentOrder;
    
    this.render();
  }
  
  generateElems() {
    this.elements = {
      container: document.querySelector(this.containerSelector),
      tabs: document.createElement('ul'),
      content: document.createElement('div')
    };
    
    const {container, tabs, content: tabsContent} = this.elements;
    
    if (this.isIndexesMatch) {
      tabsContent.append(
        this.content.map(contentItem => {
          // contentItem.dataset()
        })
      );
    }
    
    container.append(
      tabs,
      content
    );
  }
  
  render() {
    this.generateElems();
    
    this.activeTab = this.tabsNames[0];
  }
}