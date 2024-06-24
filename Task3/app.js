

const navoptions = document.getElementById("nav");
const togglenav = ()=>{
    if(navoptions.style.display == "none"){
        navoptions.style.display = "flex";
    }else{
        navoptions.style.display = "none";
    }
} 


const courseSec = document.getElementById("coursesSection");
var calculateHeight = courseSec.offsetHeight +  courseSec.offsetTop + 100;
const footer = document.getElementById("footer")
if(calculateHeight < window.innerHeight){
    footer.style.position="absolute";
}


const data = [
    {
        "coursename":"Acceleration",
        "subject":"Physics",
        "grade":7,
        "grade2":2,
        "courseLen":{
            "units":4,
            "lessons":18,
            "topics":24,
        },
        "teachers":[
            "Mr.Frank's Class B","ALl Classes"
        ],
        "noOfStudents":50,
        "startdate":"21-Jan-2020",
        "enddate":"21-Aug-2020",
        "image":URL("./Images/CourseImage/imageMask-1.png")
    },
    {
        "coursename":"Displacement, Velocity and Speed",
        "subject":"Physics 2",
        "grade":6,
        "grade2":3,
        "courseLen":{
            "units":2,
            "lessons":15,
            "topics":20,
        },
        "teachers":[
            "Mr.Frank's Class B","All Classes"
        ],
        "noOfStudents":"",
        "startdate":"",
        "enddate":"",
        "image":URL("./Images/CourseImage/imageMask-1.png")
    }
]

data.forEach((d)=>{
    courseSec.innerHTML=`
    <div class="courseCard">
          <div class="coursesInfo">
            <div class="courseImage">
              <img src="./Images/courseImg2.png" alt="img" />
            </div>
            <div class="courseDetail">
              <div class="courseName">
                <p>${d.coursename}</p>
                <span>
                  <img src=${d.image} alt="" />
                </span>
              </div>
              <div class="courseSub">
                <p>${d.subject}</p>
                <p>|</p>
                <p>Grade ${d.grade} <span style="color: #1f7a54">+${d.grade2}</span></p>
              </div>
              <div class="courseLen">
                <p><b>${d.units}</b> Units</p>
                <p><b>${d.lessons}</b> Lessons</p>
                <p><b>${d.topics}</b> Topics</p>
              </div>
              <div class="courseTeacher">
                <select name="teacher" id="teacher">
                  <option value="">Mr. Frank's Class B</option>
                  <option value="">All Classes</option>
                </select>
              </div>
              <div class="courseDate">
                <p>50 Students</p>
                <p>|</p>
                <p>21-jan-2020 - 21-Aug-2020</p>
              </div>
            </div>
          </div>
          <hr />
          <div class="coursesActions">
            <span>
              <img src="./Images/icons/preview.svg" alt="" srcset="" />
            </span>
            <span>
              <img src="./Images/icons/manage course.svg" alt="" srcset="" />
            </span>
            <span>
              <img
                src="./Images/icons/grade submissions.svg"
                alt=""
                srcset=""
              />
            </span>
            <span>
              <img src="./Images/icons/reports.svg" alt="" srcset="" />
            </span>
          </div>
        </div>`

        
})