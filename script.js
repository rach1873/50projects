const table = document.getElementById('table');
const incomplete = document.getElementById('incomplete');
const checkbox = document.querySelectorAll('[type="checkbox"]');

const projects = JSON.parse(localStorage.getItem('projects')) || [
    { section:"2",project:"Sign Up Form",time: "25min", status: null},
    { section:"3",project:"Nike Product Card",time: "29min", status: null},
    { section:"4",project:"Dark Mode",time: "22min", status: null},
    { section:"5",project:"3D Swing",time: "27min", status: null},
    { section:"6",project:"3D Menu",time: "21min", status: null},
    { section:"7",project:"3D Landing Page",time: "42min", status: null},
    { section:"8",project:"3D Button",time: "14min", status: null},
    { section:"9",project:"Animated Landing Page",time: "20min", status: null},
    { section:"10",project:"Landing Page with Modal",time: "43min", status: null},
    { section:"11",project:"3D Room",time: "23min", status: null},
    { section:"12",project:"CSS Grid Gallery",time: "14min", status: null},
    { section:"13",project:"CSS Toggle",time: "11min", status: null},
    { section:"14",project:"Pricing Cards",time: "22min", status: null},
    { section:"15",project:"Bicycle",time: "30min", status: null},
    { section:"16",project:"Hamburger Menu",time: "21min", status: null},
    { section:"17",project:"CSS Checkbox",time: "11min", status: null},
    { section:"18",project:"3D Card",time: "9min", status: null},
    { section:"19",project:"Helicopter",time: "23min", status: null},
    { section:"20",project:"Business Card",time: "23min", status: null},
    { section:"21",project:"Radio Button",time: "11min", status: null},
    { section:"22",project:"Slideshow",time: "39min", status: null},
    { section:"23",project:"Atom",time: "20min", status: null},
    { section:"24",project:"Creative Button",time: "9min", status: null},
    { section:"25",project:"Hamburger Menu",time: "27min", status: null},
    { section:"26",project:"SideBar Menu",time: "1hr 13min", status: null},
    { section:"27",project:"Flower",time: "12min", status: null},
    { section:"28",project:"Rounded Navbar",time: "17min", status: null},
    { section:"29",project:"Navigation",time: "20min", status: null},
    { section:"30",project:"Dropdown Menu",time: "31min", status: null},
    { section:"31",project:"CSS Navigation Menu",time: "17min", status: null},
    { section:"32",project:"Animated Earth",time: "11min", status: null},
    { section:"33",project:"CSS Grid Menu",time: "55min", status: null},
    { section:"34",project:"Profile Card",time: "40min", status: null},
    { section:"35",project:"Countdown",time: "33min", status: null},
    { section:"36",project:"Calendar",time: "41min", status: null},
    { section:"37",project:"Ball Animation",time: "21min", status: null},
    { section:"38",project:"Forms with Validation",time: "1hr 4min", status: null},
    { section:"39",project:"Social Media Icons Slideshow",time: "17min", status: null},
    { section:"40",project:"Circle Progress Bar",time: "22min", status: null},
    { section:"41",project:"Ripple Button",time: "17min", status: null},
    { section:"42",project:"Website Loaders",time: "19min", status: null},
    { section:"43",project:"Project Navbar",time: "21min", status: null},
    { section:"44",project:"Landing Page ",time: "10min", status: null},
    { section:"45",project:"Clock",time: "22min", status: null},
    { section:"46",project:"Jumping Square",time: "15min", status: null},
    { section:"47",project:"Search Bar",time: "21min", status: null},
    { section:"48",project:"3D Forms",time: "25min", status: null},
    { section:"49",project:"Invisible Card",time: "41min", status: null},
    { section:"50",project:"Sign Up Form",time: "1hr 3min", status: null},
    { section:"51",project:"Profile Cards",time: "55min", status: null},
    { section:"52",project:"Slideshow",time: "47min", status: null},
    { section:"53",project:"3D Hamburger",time: "1hr 20min", status: null},
    { section:"54",project:"3D Cube",time: "59min", status: null}
]


localStorage.setItem('projects',JSON.stringify(projects));

function writeItems() {
    table.innerHTML = projects.map(element=>{
        return `
    
            <tr id=${element.section}>
                <td>${element.section}</td>
                <td>${element.project}</td>
                <td>${element.time}</td>
                <td>
                    <input class="check" id=${element.section} type="checkbox" ${element.status}  >
                </td>
            </tr>
    
    
        `
    }).join("");
    
}


function incompletedItems() {
    incomplete.innerHTML = projects.filter(element=>element.status === null).map(element=>{
        return `
    
            <tr id=${element.section}>
                <td>${element.section}</td>
                <td>${element.project}</td>
                <td>${element.time}</td>
                <td>
                    <input class="check" id=${element.section} type="checkbox" ${element.status}  >
                </td>
            </tr>
    
    
        `
    }).join("");
}





table.addEventListener('click',(e)=>{
    let id = e.target.id
    let index = projects.findIndex(element=>element.section === id);

    
    if(e.target.checked) {
        projects[index].status = "checked";
        localStorage.setItem('projects',JSON.stringify(projects));
        writeItems();
        incompletedItems();

    } else if (!e.target.checked)  {
        projects[index].status = null;
        localStorage.setItem('projects',JSON.stringify(projects));
        writeItems();
        incompletedItems();
        
    }

    

   
})

writeItems();
incompletedItems();