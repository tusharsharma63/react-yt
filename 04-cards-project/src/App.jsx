import Card from './components/card.jsx'

const App = () => {

  
const jobOpenings = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3bv4uiFo-ESs9Lu19Vi3Tv4xvViahEUN1t2aTZYyd9Q&s=10",
    company: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer, Full Stack",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$35/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTseOigip8VbgjIR-vVHWxYyPZhEL2QLbxmP-eql1Pkew&s=10",
    company: "Microsoft",
    datePosted: "2 weeks ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$32/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvdQkDmPAVnD9Lrwp7lQrPKSkGkIO8fhq1j_6aTTPptA&s=10",
    company: "Amazon",
    datePosted: "1 day ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$30/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYq7Q44IZaZV_veFoDZeJGgyTiED8noQ5lTNTkxfEqiA&s=10",
    company: "Meta",
    datePosted: "3 weeks ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$45/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3rApSjDXCOAsStw4_AN64xcOJJNOKor2lTOhPxChGPA&s=10",
    company: "Apple",
    datePosted: "10 days ago",
    post: "iOS Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$40/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtaKUVn5dhv3d0iz1kwhaR_zqbUUjIHQKpklFBNbLvKg&s=10",
    company: "Netflix",
    datePosted: "6 weeks ago",
    post: "Data Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$55/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG_i8fKv9X-FkwcSY_-379eGTOcLMJsw7imMTUsUwFgA&s=10",
    company: "NVIDIA",
    datePosted: "4 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$50/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDs7nQTcft-duPIuGYhluy3JbYnHjYDiHwoUcY19qMQ&s=10",
    company: "Adobe",
    datePosted: "8 days ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$28/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzXmjKbRxkBXUooT8lvfcrt7lXL_EVSJDMOQBXKVbkpg&s=10",
    company: "Oracle",
    datePosted: "10 weeks ago",
    post: "Cloud Solutions Architect",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$48/hour",
    location: "Gurugram, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnIgp1fEs72LNzFwkLiLJXzbOVAo_K7qaz9t23OWdceQ&s=10",
    company: "Salesforce",
    datePosted: "2 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$38/hour",
    location: "Bengaluru, India"
  }
];

  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx) {     
        return <div key={idx}>
          <Card company={elem.company} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} brandLogo={elem.brandLogo} datePosted={elem.datePosted} />
        </div>
      })}
    </div>
  )
}

export default App
