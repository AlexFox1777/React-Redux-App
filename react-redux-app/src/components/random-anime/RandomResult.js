import React from 'react'
import {connect} from "react-redux";
import {getData} from "../../actions";
import styled from 'styled-components';
import GradeIcon from '@material-ui/icons/Grade';
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {yellow} from "@material-ui/core/colors";

const AnimeCard = styled.div`
    width: 70%;
    text-align: center;
        border: 1px solid #ffffff;
    box-shadow: 0 14px 28px rgba(132, 58, 163, 0.25), 0 10px 10px rgba(68, 35, 112, 0.22);
`;
const AnimeMain = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 20px 20px 20px;
`;
const AnimeFeature = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
   
`;
const AnimeIcons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center; 
       border: 1px solid #ffffff;
    width: 13%;
    padding: 0 20px 0 20px
    box-shadow: -9px 7px 28px rgba(255, 255, 255, 0.25), -7px 7px 10px rgba(148, 138, 161, 0.22);
`;
const AnimeContent = styled.div`
    text-align: center;
    padding: 20px;
`;
const AnimeMedia = styled.div`

`;
const AgeIcon = styled.div`
    margin-left: 20px;
    background: #ff510cd1;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    line-height: 40px;
    :hover {
    background: red;
  }
`;

const useStyles = makeStyles(theme => ({
    root: {
        color: theme.palette.text.primary,
    },
    icon: {
        margin: theme.spacing(1),
        fontSize: 35,
        color: yellow[400],
        '&:hover': {
            color: yellow[800],
        },
    },
    rating: {
        color: '#beb7b7',
    }
}));

const RandomResult = props => {
    const classes = useStyles();
    return (
        <AnimeCard>
            {/*<button onСlick={props.getData}>Tat</button>*/}
            <AnimeFeature>
                {/*<p>{props.rating}</p>*/}
                <AnimeIcons>
                    <GradeIcon className={classes.icon}/>
                    <Typography className={classes.rating}>83</Typography>
                    <AgeIcon>17+</AgeIcon>
                </AnimeIcons>
            </AnimeFeature>
            <AnimeMain>
                <AnimeMedia>
                    {/*<img src={props.image}/>*/}

                    <img height="400" src="https://media.kitsu.io/anime/poster_images/1/medium.jpg?1431697256"/>
                </AnimeMedia>
                <AnimeContent>
                    {/*    <p>{props.title}</p>
                <p>{props.description}</p>
                <p>{props.rating}</p>*/}

                    <Typography component="h3" variant="h5">Cowboy Bebop</Typography>
                    <p>In the year 2071, humanity has colonized several of the planets and moons of the solar system
                        leaving the now uninhabitable surface of planet Earth behind. The Inter Solar System Police
                        attempts to keep peace in the galaxy, aided in part by outlaw bounty hunters, referred to as
                        \"Cowboys\". The ragtag team aboard the spaceship Bebop are two such individuals.\r\nMellow and
                        carefree Spike Spiegel is balanced by his boisterous, pragmatic partner Jet Black as the pair
                        makes a living chasing bounties and collecting rewards. Thrown off course by the addition of new
                        members that they meet in their travels—Ein, a genetically engineered, highly intelligent Welsh
                        Corgi; femme fatale Faye Valentine, an enigmatic trickster with memory loss; and the strange
                        computer whiz kid Edward Wong—the crew embarks on thrilling adventures that unravel each
                        member's dark and mysterious past little by little. \r\nWell-balanced with high density action
                        and light-hearted comedy, Cowboy Bebop is a space Western classic and an homage to the smooth
                        and improvised music it is named after.</p>

                </AnimeContent>
            </AnimeMain>
        </AnimeCard>
    )
};
const mapStateToProps = state => ({
    title: state.canonicalTitle,
    description: state.synopsis,
    rating: state.averageRating,
    image: state.image,
});
export default connect(mapStateToProps, {getData})(RandomResult);