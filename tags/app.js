const bootstrapTagsinput=document.querySelector(".bootstrap-tagsinput");
const span=document.querySelector("span");
const input=document.querySelector("input");
const removeButton = document.querySelector("button");

let tags =[];

input.addEventListener("keyup",addTag);
removeButton.addEventListener("click",removeAll);
function removeAll()
{
    tags=[];
    bootstrapTagsinput.querySelectorAll("span").forEach(span => span.remove());

}
function createTag()
{
    bootstrapTagsinput.querySelectorAll("span").forEach(span => span.remove());

    tags.forEach(tag=>
    {
        let spanTag = `<span class="tag label label-info"> ${tag} <i class="fa fa-remove" onclick="remove(this,'${tag}')"></i><span data-role="remove"></span></span>`;
        bootstrapTagsinput.insertAdjacentHTML("afterbegin",spanTag);

    });
}
function remove(element,tag)
{
   
    let index = tags.indexOf(tag);
    if (index !== -1) {
        tags.splice(index, 1);
    }
    console.log(tags);

    element.parentElement.remove(); // DOM elementini de kaldırmak için
}
function addTag(e)
{
    if(e.key=="Enter")
    {
        let tag = e.target.value.replace(/\s+/g, ' ');
        if (tag.length > 1 && !tags.includes(tag))
             {
            tag.split(',').forEach(tag => {
                    tags.unshift(tag);
                    createTag();
            });
            
        }
        e.target.value="";
        
    }
    if (e.key === "Backspace" && e.target.value === "") {
        if (tags.length > 0) {
            const lastTag = tags[0];
            const spanElements = bootstrapTagsinput.querySelectorAll("span");
            for (let i = 0; i < spanElements.length; i++) {
                if (spanElements[i].textContent.includes(lastTag)) {
                    spanElements[i].remove();
                    break;
                }
            }
            tags.shift(); // Remove the first element from the array
        }
    }
    
}
