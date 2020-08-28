import React,{Component} from 'react'
import {Figure, FigureImage, FigureCaption} from 'react-bootstrap';
import PaperPin from '../../Images/Paperpin.jpeg'
class Story1 extends Component {
    render() {
        return(
            <div>
                <Figure>
                <Figure.Image
                    width={171}
                    height={180}
                    alt="Paper Pin"
                    src={PaperPin}
                />
                <Figure.Caption>
                <b>Look at the above pic. The creativity was lit. It contains two bride and groom papers and a paper stabler with lots of pins in it. The pin inside the stabler helps the two papers (bride and groom) to join. 

Now let us think that in another way. 
Consider one of that paper as you and the other paper was your ambition. Now the paper stabler here was your life. Life contains lot of people like family, friends, love, crush, enemy, stranger and lot more people who are the pins inside the paper stabler(life). 

The best pin will make strong bonding between the papers and the worst pin wouldn't have attach to the paper. Like wise the best people around you will support you to achieve your dream and the worst will push you down. 

Hold your dreamz and try to achieve it. The supporting people will always supports you. Don't lose your hope. Achieve something in the life which speaks for the rest of the life. 

Don't care about what people care about you. If you like doing something that makes you feel good and comfortable do that. People will always murmur about you behind your back to make you feel wrong. It's really waste of time and they are not going to award you if you try to prove yourself by answering them how you are right in your perspective. Let them talk and you keep on moving with what you like and what you love.<br></br>
(This was a post which I wrote in <a href="https://www.quora.com/What-are-some-pictures-without-text-with-deep-meaning-s?top_ans=140163160">Quora</a> after seeing that picture.)</b>


                </Figure.Caption>
                </Figure>
            </div>
        )
    }
}

export default Story1;