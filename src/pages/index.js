import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://img.freepik.com/free-photo/male-coworkers-office-with-lunch_273609-6073.jpg?size=626&ext=jpg&uid=R69842242&semt=ais',
        address: 'california silicon valley, usa',
        description: 'This is a first meetup!' 
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://img.freepik.com/free-photo/two-people-using-laptop-meeting-coffee-shop_58466-16793.jpg?size=626&ext=jpg&uid=R69842242&semt=ais',
        address: 'sans fransisco green park, usa',
        description: 'This is a second meetup!' 
    }
]

function HomePage (){
    return(
     <MeetupList meetups ={DUMMY_MEETUPS}/>
    )
}
export default HomePage;