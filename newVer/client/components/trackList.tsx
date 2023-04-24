import React from "react";
import { ITrack } from "../types/track";
import { Box, Grid } from "@mui/material";

interface TrackListProps {
    track: ITrack[]
}

const TrackList: React.FC = ({ tracks }) => {

    return (
        <Grid container direction='column'>
            <Box p={2}>
                {tracks.map(track =>
                    <TrackItem
                        key={track._id}
                        track={track}
                    />)}
            </Box>
        </Grid>
    );
};

export default TrackList;