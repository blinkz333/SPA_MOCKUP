import styles from "./desktop.module.css";
import football from './img/footballer-1@2x.png'
import group3 from './img/group-3.svg'

const Desktop = () => {

  return (

    <div className={styles.desktop}>
    
    <div className={styles.athlets}>
      <div className={styles.athlets1}>ATHLETS</div>

      <div className={styles.connectionFrame1}>
        <div className={styles.div5}>01</div>
        <div className={styles.underline011} />
        <div className={styles.connection1}>CONNECTION</div>
        <div className={styles.connectWithCoaches}>
          Connect with coaches directly, you can ping coaches to view profile.
        </div>
      </div>

      <div className={styles.collaborationFrame1}>
        <div className={styles.div4}>02</div>
        <div className={styles.underline021} />
        <div className={styles.collaboration1}>COLLABORATION</div>
        <div className={styles.workWithOther}>
          Work with other student athletes to  increase visability. When you
          share and like other players videos it will increase your visability
          as a player. This is the team work aspect to Surface 1.
        </div>
      </div>
      
      <div className={styles.purpleBg} />
      
      <div className={styles.growthFrame1}>
      <div className={styles.div3}>03</div>
      <div className={styles.underline031} />
      <div className={styles.growth1}>GROWTH</div>
      <div className={styles.resourcesAndTools}>
          Resources and tools for you to get better as a student Athelte.
          Access to training classes, tutor sessions, etc 
      </div>
        
        
        
      </div>

     

      

      
    </div>
    
    <div className={styles.player}>
      <div className={styles.gagiBg} />
      <div className={styles.growthFrame}>
        <div className={styles.saveYourTimeContainer}>
          <span className={styles.saveYourTime}>
            Save your time, recruit proper athlets for your team
          </span>
          .
        </div>
        <div className={styles.growth}>GROWTH</div>
        <div className={styles.underline03} />
        <div className={styles.div}>03</div>
      </div>
      <div className={styles.collaborationFrame}>
        <div className={styles.workWithRecruiterContainer}>
          <span className={styles.saveYourTime}>
            Work with recruiter to increase your chances of finding talented
            athlete
          </span>
          .
        </div>
        <div className={styles.collaboration}>COLLABORATION</div>
        <div className={styles.underline02} />
        <div className={styles.div1}>02</div>
      </div>
      <div className={styles.connectionFrame}>
        <div className={styles.connectWithTalente}>
          Connect with talented athlete directly, you can watch their skills
          through video showreels directly from Surface 1.
        </div>
        <div className={styles.connection}>CONNECTION</div>
        <div className={styles.underline01} />
        <div className={styles.div2}>
          <span className={styles.span}>0</span>1
        </div>
      </div>
      <div className={styles.players}>PLAYERS</div>
      <img className={styles.playerChild} alt="" src={group3} />
    </div>
   
    <img
      className={styles.footballer1Icon}
      alt=""
      src={football}
    />
  </div>
  );
};

export default Desktop;
