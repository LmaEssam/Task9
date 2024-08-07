import './SmallCards.css';
import Cards from '../Cards/Cards';
import ellipsis from '../../assets/icon-ellipsis.svg';
import exercise from '../../assets/icon-exercise.svg';
import play from '../../assets/icon-play.svg';
import self from '../../assets/icon-self-care.svg';
import social from '../../assets/icon-social.svg';
import study from '../../assets/icon-study.svg';
import work from '../../assets/icon-work.svg';

const imageMap = {
    work,
    play,
    study,
    exercise,
    social,
    self,
    ellipsis,
};

function SmallCards() {
    const firstarray = [
        {
            CardImg: 'work',
            outercolor: 'hsl(15, 100%, 70%)',
            cardlabel: 'Work',
            carddots: 'ellipsis',
            cardheader: '32hrs',
            cardparagraph: 'Last Week - 36hrs',
            uniqueID: 1
        },
        {
            CardImg: 'play',
            outercolor: 'hsl(195, 74%, 62%)',
            cardlabel: 'Play',
            carddots: 'ellipsis',
            cardheader: '10hrs',
            cardparagraph: 'Last Week - 8hrs',
            uniqueID: 2
        },
        {
            CardImg: 'study',
            outercolor: 'hsl(348, 100%, 68%)',
            cardlabel: 'Study',
            carddots: 'ellipsis',
            cardheader: '4hrs',
            cardparagraph: 'Last Week - 7hrs',
            uniqueID: 3
        }
    ];

    const secondarray = [
        {
            CardImg: 'exercise',
            outercolor: 'hsl(145, 58%, 55%)',
            cardlabel: 'Exercise',
            carddots: 'ellipsis',
            cardheader: '4hrs',
            cardparagraph: 'Last Week - 5hrs',
            uniqueID: 1
        },
        {
            CardImg: 'social',
            outercolor: 'hsl(264, 64%, 52%)',
            cardlabel: 'Social',
            carddots: 'ellipsis',
            cardheader: '5hrs',
            cardparagraph: 'Last Week - 10hrs',
            uniqueID: 2
        },
        {
            CardImg: 'self',
            outercolor: 'hsl(43, 84%, 65%)',
            cardlabel: 'Self Care',
            carddots: 'ellipsis',
            cardheader: '2hrs',
            cardparagraph: 'Last Week - 2hrs',
            uniqueID: 3
        }
    ];

    return (
        <div id='smallcard'>
            <div id='firstrow'>
                {firstarray.map((item) => (
                    <Cards
                        key={item.uniqueID}
                        CardImg={imageMap[item.CardImg]}
                        outercolor={item.outercolor}
                        cardlabel={item.cardlabel}
                        carddots={imageMap[item.carddots]}
                        cardheader={item.cardheader}
                        cardparagraph={item.cardparagraph}
                    />
                ))}
            </div>
            <div id='secondrow'>
                {secondarray.map((select) => (
                    <Cards
                        key={select.uniqueID}
                        CardImg={imageMap[select.CardImg]}
                        outercolor={select.outercolor}
                        cardlabel={select.cardlabel}
                        carddots={imageMap[select.carddots]}
                        cardheader={select.cardheader}
                        cardparagraph={select.cardparagraph}
                    />
                ))}
            </div>
        </div>
    );
}

export default SmallCards;