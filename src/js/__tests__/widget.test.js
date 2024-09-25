import { Widget } from '../widget'

test('testCreateWidget',()=>{
    document.body.innerHTML = `<div class='container'>
        <button type="button" class="btn btn-lg btn-danger" data-toggle="popover" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="Popover title" aria-describedby="popover990915">Click to toggle popover</button>
    </div>`;
    const description = new Widget (document.querySelector('.container'));
    description.eventClick();
    let btn = document.querySelector('.btn');
    btn.click();
    let widget = document.querySelector('.popover');
    let result = widget.classList.contains('popover')
    expect(result).toBe(true)
})
test('testCloseWidget',()=>{
    document.body.innerHTML = `<div class='container'>
        <button type="button" class="btn btn-lg btn-danger" data-toggle="popover" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="Popover title" aria-describedby="popover990915">Click to toggle popover</button>
    </div>`;
    const description = new Widget (document.querySelector('.container'));
    description.eventClick();
    let btn = document.querySelector('.btn');
    btn.click();
    btn.click();
    let widget = document.querySelector('.popover');
    expect(widget).toBe(null)
})