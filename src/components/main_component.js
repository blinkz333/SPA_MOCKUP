// import styles from "./desktop.module.css";
import styles from "./main.module.css";
import football from './img/footballer-1@2x.png'
import players from './img/players.svg'
import football_tablet from './img/football_tablet.svg'
import football_mobile from './img/foorball_mobile.svg'
import players_tablet from './img/players_tablet.svg'
import players_mobile from './img/players_mobile.svg'

import Slider from "react-slick";

const Desktop = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className={styles.global}>
      
      <div className="athlets">
        <div className={styles.athlets}>ATHLETS</div>
          {
            window.screen.width <= 320 ?
            <Slider {...settings}>
              <div className="topic1">
                <div className={styles.app_slider_div}>
                <div className={styles.app_slider_topic}>01</div>
                <div className={styles.app_slider_header}>CONNECTION</div>
                <div className={styles.underline_athlets_mobile} />
                <div className={styles.app_slider_content}>
                  Connect with coaches directly, you can ping coaches to view profile.
                </div>
                </div>
              </div>
              <div className="topic2">
                <div className={styles.app_slider_div}>
                <div className={styles.app_slider_topic}>02</div>
                <div className={styles.app_slider_header}>COLLABORATION</div>
                <div className={styles.underline_athlets_mobile} />
                <div className={styles.app_slider_content}>
                  Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.
                </div>
                </div>
              </div>
              <div className="topic3">
                <div className={styles.app_slider_div}>
                <div className={styles.app_slider_topic}>03</div>
                <div className={styles.app_slider_header}>GROWTH</div>
                <div className={styles.underline_athlets_mobile} />
                <div className={styles.app_slider_content}>
                Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc
                </div>
                </div>
              </div>
            </Slider>
            :
            <>
            <div className="topic1_athlets">
            <div className={styles.topic01_athlets}>01</div>
            <div className={styles.underline_01_athlets}/>
            <div className={styles.Header_01_athlets}>CONNECTION</div>
            <div className={styles.title_01_athlets}>Connect with coaches directly, you can ping coaches to view profile.</div>
          </div>
          <div className="topic2_athlets">
            <div className={styles.topic02_athlets}>02</div>
            <div className={styles.underline_02_athlets}/>
            <div className={styles.Header_02_athlets}>COLLABORATION</div>
            <div className={styles.title_02_athlets}>Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.</div>
          </div>
          <div className={styles.purple_bg}/>
          <div className="topic3_athlets">
            <div className={styles.topic03_athlets}>03</div>
            <div className={styles.underline_03_athlets}/>
            <div className={styles.Header_03_athlets}>GROWTH</div>
            <div className={styles.title_03_athlets}>Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc </div>
          </div>
            </>
          }
          
          {/* img handle */}
          {window.screen.width <= 320 ? 
            <div className="img_mobile"> 
            <img
              className={styles.footballer_player}
              alt=""
              src={football_mobile}
              />
            </div>
            : (window.screen.width <= 768 ? 
              <div className="img_tablet"> 
              <img
                className={styles.footballer_player}
                alt=""
                src={football_tablet}
                />
              </div>
            : 
            <img
            className={styles.footballer_player}
            alt=""
            src={football}
            />)
          }
          
      </div>
      
      <div className="Player">

       
        <div className={styles.players}>PLAYERS</div>
        
        {window.screen.width <= 320 ? 
        <Slider {...settings}>
        <div className="topic1">
          <div className={styles.app_slider_div_players}>
          <div className={styles.app_slider_topic}>01</div>
          <div className={styles.app_slider_header}>CONNECTION</div>
          <div className={styles.underline_athlets_mobile} />
          <div className={styles.app_slider_content}>
          Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.
          </div>
          </div>
        </div>
        <div className="topic2">
          <div className={styles.app_slider_div_players}>
          <div className={styles.app_slider_topic}>02</div>
          <div className={styles.app_slider_header}>COLLABORATION</div>
          <div className={styles.underline_athlets_mobile} />
          <div className={styles.app_slider_content}>
            Work with recruiter to increase your chances of findingtalented athlete.
          </div>
          </div>
        </div>
        <div className="topic3">
          <div className={styles.app_slider_div_players}>
          <div className={styles.app_slider_topic}>03</div>
          <div className={styles.app_slider_header}>GROWTH</div>
          <div className={styles.underline_athlets_mobile} />
          <div className={styles.app_slider_content}>
            Save your time, recruit proper athlets for your team.
          </div>
          </div>
        </div>
        
       
      </Slider>
        : 
        <>
        <div className="topic1_players">
            <div className={styles.topic01_players}>01</div>
            <div className={styles.underline_01_players}/>
            <div className={styles.Header_01_players}>CONNECTION</div>
            <div className={styles.title_01_players}>Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.</div>
        </div>

        <div className="topic2_players">
            <div className={styles.topic02_players}>02</div>
            <div className={styles.underline_02_players}/>
            <div className={styles.Header_02_players}>COLLABORATION</div>
            <div className={styles.title_02_players}>Work with recruiter to increase your chances of finding talented athlete.</div>
        </div>

        <div className={styles.darkblue_bg}/>

        <div className="topic3_players">
            <div className={styles.topic03_players}>03</div>
            <div className={styles.underline_03_players}/>
            <div className={styles.Header_03_players}>GROWTH</div>
            <div className={styles.title_03_players}>Save your time, recruit proper athlets for your team.</div>
        </div>
        </>
        }
        


        {window.screen.width <= 320 ? 
              <div className="img_mobile"> 
              <img
                className={styles.basketball_player}
                alt=""
                src={players_mobile}
                />
              </div>
            : (window.screen.width <= 768 ? 
            
              <div className="img_tablet"> 
              <img
                className={styles.basketball_player}
                alt=""
                src={players_tablet}
                />
              </div>
            
            : <div className="player_img">
            <img
              className={styles.basketball_player}
              alt=""
              src={players}
            />
            </div>)
            
          }
      </div>
   </div>
    
  );
};

export default Desktop;
