fetch("https://gdscdev.vercel.app/api")
  .then((data) => {
    return data.json();
  })
  .then((objectData) => {
    const conference = objectData.content.data;
    console.log(conference);
    let tableData = "";
    conference.forEach((values) => { // Change .map() to .forEach()
      tableData += `<tr>
        <td>${values.id}</td>
        <td>${values.title}</td>
        <td>${values.description}</td>
         <td><img src="${values.banner_image}"/></td>
        <td>${values.date_time}</td>
        <td>${values.organiser_name}</td>
        <td><img src="${values.organiser_icon}"/></td>
        <td>${values.venue_name}</td>
        <td>${values.venue_city}</td>
        <td>${values.venue_country}</td>
      </tr>`;
    });
    document.getElementById("table_body").innerHTML = tableData;
  })
  .catch((error) => {
    console.error("Error fetching API:", error);
  });

  // scrolling
window.addEventListener('scroll', handelScrollBtn);

let scrollBtn=document.getElementById('scrollTop');
scrollBtn.addEventListener('click',scrollTop);

function handelScrollBtn(){
  let scrollY=window.scrollY;
  if(scrollY>100){
    scrollBtn.style.opacity="1";
  }
  else {
    scrollBtn.style.opacity="0";
  }
}
function scrollTop(){
  window.scrollTo(0,0);
}