export class Widget {
    constructor (element){
        this._element = element;
        this.show = true;
    }
    static createObject (type,content,className){
        let element = document.createElement(`${type}`);
        if(content||content == undefined){
            element.textContent = content;
        }
        if(className || className == undefined){
            element.classList.add(className)
        }
        return element;
    }
    renderDescription (){
        let container = document.querySelector('.container');
        let btn = container.querySelector ('.btn-lg');
        let content = btn.getAttribute ('data-content')
        let header = btn.getAttribute ('data-original-title');
        if(this.show == false || this.show == undefined){
            let descriptionContainer = Widget.createObject('div',undefined,'popover');
            descriptionContainer.className = 'popover fade bs-popover-right show';
            let arrow = Widget.createObject('div',undefined,'arrow');
            let descriptionHeader = Widget.createObject('h3',header,'popover-header');
            let descriptionBody = Widget.createObject('div',content,'popover-body');
            descriptionContainer.appendChild(arrow);
            descriptionContainer.appendChild(descriptionHeader);
            descriptionContainer.appendChild(descriptionBody);
            container.appendChild(descriptionContainer);
            const {top, left,width,height} = btn.getBoundingClientRect();
            arrow.style.position = 'absolute';
            arrow.style.top = top - height  + 'px';
            arrow.style.left = left + width/2  + 'px';
            descriptionContainer.style.top = top - height - 20 + 'px';
            descriptionContainer.style.left = left + width/2  + 'px';
            descriptionContainer.style.position = 'absolute'
            this.show = true;
        }else{
            this.show = false;
            let description = container.querySelector('.fade');
            description.remove()
        }
    }
    eventClick (){
        let btn = this._element.querySelector ('.btn-lg');
        btn.addEventListener ('click', this.renderDescription);
    }
}