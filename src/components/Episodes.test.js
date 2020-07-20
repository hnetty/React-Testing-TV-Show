import React from 'react';
import { render, screen } from '@testing-library/react';
import Episodes from './Episodes';

const episodeData = [
    {
        id: 553946,
        url: "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
        name: "Chapter One: The Vanishing of Will Byers",
        season: 1,
        number: 1,
        airdate: "2016-07-15",
        airtime: "",
        airstamp: "2016-07-15T12:00:00+00:00",
        runtime: 60
    }
]

test("Episodes renders correctly when mounting", () => {
    render(<Episodes episodes={[]}/>)
})

test("Displays episodes as the episodes prop is updated", () => {

    const { rerender } = render (<Episodes episodes={[]}/>);

    expect(screen.queryByText(/Chapter/i)).toBeNull();
    expect(screen.queryByAltText("Chapter")).toHaveLength(0);

    rerender(<Episodes episodes={episodeData}/>);
    screen.debug();

    expect(screen.getByText(/Chapter/i)).toBeInTheDocument();
    expect(screen.getAllByAltText("Chapter")).toHaveLength(7);
})