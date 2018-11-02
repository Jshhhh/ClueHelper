import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        players: state.players,
        weapons: state.weapons,
        rooms: state.rooms
    }
};

const Board = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th></th>
                    {
                        props.weapons.map(weapon => <th key={weapon} className='rotate-header'><div><span>{weapon}</span></div></th>) 
                    }
                    {
                        props.rooms.map(room => <th key={room} className='rotate-header'><div><span>{room}</span></div></th>)
                    }
                </tr>
            </thead>
            <tbody>
                {
                    props.players.map(player=> {
                        return (
                            <tr key={player}>
                                <th className='row-header'>{player}</th>
                                {props.weapons.map((e, i) => <td key={e + i}></td>)}
                                {props.rooms.map((e, i) => <td key={e + i}></td>)}
                            </tr>
                        );
                    })
                }
                {
                    props.rooms.map(room => {
                        return (
                            <tr key={room + 'Col'}>
                                <th className='row-header'>{room}</th>
                                {props.weapons.map(e => <td key={e + 'row2'}></td>)}
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
};

export default connect(mapStateToProps)(Board)