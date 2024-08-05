/*import React from 'react';
export const About = () => (
  <div>
    <h2>About Page</h2>
    <p>This is mostly about us.</p>
  </div>

)*/

import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
class About extends React.Component{
    render(){
        return(
            <div>
                <h2 class="A1">
                    Tech Springs
                </h2>
                <p class="p1">TECH SPRINGS is an autonomous engineering college that has a number of branches(like B.E,M.E), respective faculty,number of students under each department, and other staff working in the hospital. In regular intervals exams are conducted in this college for all branches and the exams are duly monitored by teachers and staff.This task is challenging as the classrooms are to be allotted to separate departments and at a specific days and timing across the college . Also the faculty are to allocated invigilation duties according to their availability taking into their class hours schedule.The aim of this project is to design and develop a database for the college to maintain the records of various departments,exam subjects,faculties schedule,available exam classrooms,number of students in each department,student records,exam schedule information of the college. It also maintains records of the all exams conducted,available dates for scheduling upcoming exams,available rooms in which batches of students can be allocated for writing the exam,also availability of faculties in particular date for allocating exam duties.This application will be easy to comprehend,can be accessible by exam authorities and also students accordingly.It is a user interface designed in the web using java language.This is our project in a nutshell.</p>




                <h2 class="A2">
                    Faculty:
                </h2>

                <p class="p2">
                   Expert and Experienced Faculty members to guide the children to achieve Excellence through projects and other stuff
                </p>

                <h2 class="A2">
                    Library:
                </h2>

                <p class="p2">
                        Central Library is a valuable partner in user's pursuit towards excellence in learning and research. Our value lies in the valuable information resources, services and facilities that we provide to all users. The Central library has a carpet area of 8100 sq feet.
                </p>

                <h2 class="A2">
                    Hostel Facility:
                </h2>

                <p class="p2">
                Separate hostel facilities are provided for girls and boys. Their stay in the hostel enables them to imbibe a holistic lifestyle with activities like yoga, sports and extra-curricular activities. There are eight hostels in the campus which accommodate above 3500 inmates. P.G students and final year U.G students are allotted single rooms.
                </p>
            </div>
        );
    }
}
export default About;