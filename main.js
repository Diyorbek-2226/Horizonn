let back=[
{
    id:1,
    smal:"Earnings",
    price:"$350.4",
    imgUrl:"../images/lib1.svg"
},
{
    id:2,
    smal:"Spend this month",
    price:"$642.39",
    imgUrl:"../images/lib2.svg"
},
{
    id:3,
    smal:"Sales",
    price:"$574.34",
    imgUrl:"../images/lib3.svg"
},
{
    id:4,
    smal:"Your balance",
    price:"$1,000",
    imgUrl:"../images/lib4.svg"
},
{
    id:5,
    smal:"New Tasks",
    price:"154",
    imgUrl:"../images/lib5.svg"
},
{
    id:6,
    smal:"Total Projects",
    price:"2935",
    imgUrl:"../images/lib6.svg"
}
]
let UlElement= document.querySelector(".row")
const navbar = document.getElementById('navbar')
navbar.style.display="none";
const market = document.getElementById('market')
market.style.display="none"
const menuList = [navbar, market]
function menuClick(index) {
   menuList.forEach((el, ind) => {
    
   if(index === ind) el.style.display='block';
   else el.style.display='none';
   })
    
}
back.map((item ,id)=>{
    let liElement=document.createElement("li");
    let images=document.createElement("img");
    images.src=item.imgUrl
    let small=document.createElement("small");
    small.textContent=item.smal
    small.key=id
    let h1Element=document.createElement("h1");
    h1Element.textContent=item.price;
    let span=document.createElement("span");
    span.append(small, h1Element)
    liElement.append(images, span)
    UlElement.append(liElement)
    console.log(item);
    liElement.className='col-2';
    h1Element.className="col-2_title"
})
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Define the data and options for each chart
const chartConfigs = [
    {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: 'Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40']
            }]
        },
        options: { responsive: true }
    },
    {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Sales',
                data: [65, 59, 80, 81, 56, 55],
                borderColor: '#36A2EB',
                fill: false
            }]
        },
        options: { responsive: true }
    },
    {
        type: 'pie',
        data: {
            labels: ['Red', 'Blue', 'Yellow'],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
            }]
        },
        options: { responsive: true }
    },
    {
        type: 'doughnut',
        data: {
            labels: ['Red', 'Blue', 'Yellow'],
            datasets: [{
                data: [100, 200, 300],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
            }]
        },
        options: { responsive: true }
    },
    {
        type: 'radar',
        data: {
            labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling'],
            datasets: [{
                label: 'My First dataset',
                data: [65, 59, 90, 81, 56, 55],
                backgroundColor: 'rgba(179,181,198,0.2)',
                borderColor: 'rgba(179,181,198,1)'
            }]
        },
        options: { responsive: true }
    },
    {
        type: 'polarArea',
        data: {
            labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
            datasets: [{
                data: [11, 16, 7, 3, 14],
                backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB']
            }]
        },
        options: { responsive: true }
    }
];

// Initialize the charts
chartConfigs.forEach((config, index) => {
    const ctx = document.getElementById(`chart${index + 1}`).getContext('2d');
    new Chart(ctx, {
        type: config.type,
        data: config.data,
        options: config.options
    });
});



  

