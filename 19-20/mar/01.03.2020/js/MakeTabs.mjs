class MakeTabs {
  constructor({tabsNames, contentItems, containerSelector, isIndexesMatch = true, contentOrder = {}}) {
    const checkType = (objToCheck, type) => {
      if (objToCheck instanceof type) {
        return objToCheck
      } else {
        throw new TypeError(`Wrong argument type - ${objToCheck} is not an instance of ${type.name}`)
      }
    };
    
    this.tabsNames = checkType(tabsNames, Array);
    this.content = checkType(contentItems, Array);
    this.containerSelector = checkType(new String(containerSelector), String);
    this.isIndexesMatch = isIndexesMatch;
    this.contentOrder = checkType(contentOrder, Object);
    this.activeTabIndex = 0;
    
    /*
    * TODO:
    *  ability to provide custom content order
    * */
    
    this.render();
  }
  
  generateElems() {
    this.elements = {
      container: document.querySelector(this.containerSelector),
      tabs: document.createElement('div'),
      content: document.createElement('div')
    };
    
    const {container, tabs, content: tabsContent} = this.elements;
    
    tabs.append(
      ...this.tabsNames.map(tabName => {
        const t = document.createElement('div'),
          tNameElem = document.createElement('p');
        
        tNameElem.innerText = tabName;
        t.dataset.tabName = tabName.toLowerCase();
        t.append(tNameElem);
        
        
        return t;
      })
    );
    
    if (this.isIndexesMatch) {
      tabsContent.append(
        ...this.content.map((contentItem, index) => {
          const t = document.createElement('div');
          
          t.dataset.tabName = this.tabsNames[index].toLowerCase();
          t.append(contentItem);
          
          t.style.display = 'none';
          
          return t;
        })
      );
    }
    
    const activeTab = tabs.children[this.activeTabIndex];
    [...tabsContent.children].find(cI => cI.dataset.tabName === activeTab.dataset.tabName).style = null;
    
    tabs.addEventListener('click', this.showTab);
    
    container.append(
      tabs,
      tabsContent
    );
  }
  
  showTab = (e) => {
    if(e.target === e.currentTarget) {
      return null
    }
    
    const allTabs = [...e.currentTarget.children],
      clickedTab = allTabs.find(t => t.dataset.tabName === (e.target.dataset.tabName || e.target.parentElement.dataset.tabName)),
      allContent = [...this.elements.content.children],
      currentActiveContent = allContent[this.activeTabIndex];
  
    currentActiveContent.style.display = 'none';
  
    allContent.find((c, index) => {
      const condition = c.dataset.tabName === clickedTab.dataset.tabName;
      if(condition) {
        this.activeTabIndex = index;
      }
      return condition
    }).style = null;
  };
  
  render() {
    this.generateElems();
  }
}

export default MakeTabs