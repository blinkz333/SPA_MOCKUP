import styles from "./mobile_component.module.css";
import Slider from "react-slick";
import group7 from './img/group-7.svg'
import group6 from './img/group-6.svg'

const ComponentMobile = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className={styles.div}>

    <div className={styles.players}>
      <img className={styles.playersChild} alt="" src={group7} />
      <div className={styles.players1}>PLAYERS</div>
    </div>

    <div className={styles.wordPlayersBox}>
    <Slider {...settings}>
      <div>
      <div className={styles.div1}>01 <span className={styles.collaboratio}>CONNECTION</span></div> 
        <div className={styles.wordAthletsBoxChild} />
       
        <div className={styles.workWithOtherContainer}>
              <span className={styles.workWithOther}>
              Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.
              </span>
        </div>
      </div>

      <div>
      <div className={styles.div1}>02 <span className={styles.collaboratio}>COLLABORATION</span></div> 
        <div className={styles.wordAthletsBoxChild} />
        <div className={styles.workWithOtherContainer}>
              <span className={styles.workWithOther}>
              Work with recruiter to increase your chances of findingtalented athlete.
              </span>
        </div>
      </div>

      <div>
      <div className={styles.div1}>03  <span className={styles.collaboratio}>GROWTH</span></div> 
        <div className={styles.wordAthletsBoxChild} />
        <div className={styles.workWithOtherContainer}>
              <span className={styles.workWithOther}>
              Save your time, recruit proper athlets for your team.
              </span>
        </div>
      </div>

    </Slider>
    </div>

    

    <div className={styles.athlets}>
      <img className={styles.athletsChild} alt="" src={group6} />
      <div className={styles.athlets1}>ATHLETS</div>
    </div>

    <div className={styles.wordAthletsBox}>
    <Slider {...settings2}>
      <div>
        <div className={styles.div2}>01  <span className={styles.collaboratio}>CONNECTION</span></div> 
        <div className={styles.wordAthletsBoxChild} />
        <div className={styles.workWithOtherContainer}>
              <span className={styles.workWithOther}>
              Connect with coaches directly, you can ping coaches to view profile.
              </span>
        </div>
      </div>

      <div>
      <div className={styles.div2}>02   <span className={styles.collaboratio}>COLLABORATION</span></div>
        <div className={styles.wordAthletsBoxChild} />
        <div className={styles.workWithOtherContainer}>
              <span className={styles.workWithOther}>
              Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.
              </span>
        </div>
      </div>

      <div>
      <div className={styles.div2}>03  <span className={styles.collaboratio}>GROWTH</span></div>
        <div className={styles.wordAthletsBoxChild} />
        <div className={styles.workWithOtherContainer}>
              <span className={styles.workWithOther}>
              Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc
              </span>
        </div>
      </div>

    </Slider>

  </div>

    
  </div>
  );
};

export default ComponentMobile;