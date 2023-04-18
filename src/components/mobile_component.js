import styles from "./mobile_component.module.css";
import Swiper from 'react-id-swiper';
import Slider from "react-slick";

const ComponentMobile = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  var settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className={styles.div}>

    <div className={styles.players}>
      <img className={styles.playersChild} alt="" src="/group-7.svg" />
      <div className={styles.players1}>PLAYERS</div>
    </div>

    <div className={styles.wordPlayersBox}>
    <Slider {...settings}>
      <div>
      <h3 className={styles.div1}>01</h3> 
        <div className={styles.wordAthletsBoxChild} />
        <div className={styles.collaboration}>
              <span className={styles.collaboratio}>CONNECTION</span>
        </div>
        <div className={styles.workWithOtherContainer}>
              <span className={styles.workWithOther}>
              Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.
              </span>
        </div>
      </div>

      <div>
      <h3 className={styles.div1}>02</h3> 
        <div className={styles.wordAthletsBoxChild} />
        <div className={styles.collaboration}>
              <span className={styles.collaboratio}>COLLABORATION</span>
        </div>
        <div className={styles.workWithOtherContainer}>
              <span className={styles.workWithOther}>
              Work with recruiter to increase your chances of findingtalented athlete.
              </span>
        </div>
      </div>

      <div>
      <h3 className={styles.div1}>03</h3> 
        <div className={styles.wordAthletsBoxChild} />
        <div className={styles.collaboration}>
              <span className={styles.collaboratio}>GROWTH</span>
        </div>
        <div className={styles.workWithOtherContainer}>
              <span className={styles.workWithOther}>
              Save your time, recruit proper athlets for your team.
              </span>
        </div>
      </div>

    </Slider>
        
        {/* <div className={styles.saveYourTime}>
          Save your time, recruit proper athlets for your team.
        </div>
        <div className={styles.growth}>GROWTH</div>
        <div className={styles.rectangle4Copy2} />
        <div className={styles.div1}>03</div> */}
    
    </div>

    

    <div className={styles.athlets}>
      <img className={styles.athletsChild} alt="" src="/group-6.svg" />
      <div className={styles.athlets1}>ATHLETS</div>
    </div>

    <div className={styles.wordAthletsBox}>
    <Slider {...settings2}>
      <div>
        <h3 className={styles.div2}>01</h3> 
        <div className={styles.wordAthletsBoxChild} />
        <div className={styles.collaboration}>
              <span className={styles.collaboratio}>CONNECTION</span>
        </div>
        <div className={styles.workWithOtherContainer}>
              <span className={styles.workWithOther}>
              Connect with coaches directly, you can ping coaches to view profile.
              </span>
        </div>
      </div>

      <div>
      <h3 className={styles.div2}>02</h3>
        <div className={styles.wordAthletsBoxChild} />
        <div className={styles.collaboration}>
              <span className={styles.collaboratio}>COLLABORATION</span>
        </div>
        <div className={styles.workWithOtherContainer}>
              <span className={styles.workWithOther}>
              Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.
              </span>
        </div>
      </div>

      <div>
      <h3 className={styles.div2}>03</h3>
        <div className={styles.wordAthletsBoxChild} />
        <div className={styles.collaboration}>
              <span className={styles.collaboratio}>GROWTH</span>
        </div>
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