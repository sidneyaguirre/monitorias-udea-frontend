const API_BASE = "https://monitorias-backend.herokuapp.com/api/v1/";

const api = {
    services: {
        createCourse = async courseInfo => {
            var url = API_BASE + "users/createInstructor";
            var data = {
              documentType: courseInfo.documentType,
              documentNumber: courseInfo.documentNumber,
              firstName: courseInfo.firstName,
              lastName: courseInfo.lastName,
              email: courseInfo.email,
              idMateriaxinstructor: courseInfo.courseId
            };
          
            fetch(url, {
              method: "POST",
              body: JSON.stringify(data)
            })
              .then(res => res.json())
              .catch(error => console.error("Error:", error))
              .then(response => console.log("Success:", response));
          }
    }
}

export default api;