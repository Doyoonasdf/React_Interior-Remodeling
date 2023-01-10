import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
//새 재생목록playlist?list=PLSR_N0olb_L4y0L9t-ujNnuoJPO2R9G28
export const fetchYoutube = createAsyncThunk('youtube/requestYoutube', async () => {
	const key = 'AIzaSyD62N3ObfAdS9fO3LIOtg5NYyfqE7sWmq4';
	const playlistId = 'PLSR_N0olb_L4y0L9t-ujNnuoJPO2R9G28';
	const num = 8;
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;

	const response = await axios.get(url);
	return response.data.items;
});

const youtubeSlice = createSlice({
	name: 'youtube',
	initialState: {
		data: [],
		isLoading: false,
	},
	extraReducers: {
		[fetchYoutube.pending]: (state) => {
			//state.isLoading = true;
			//state.data = [];
		},
		[fetchYoutube.fulfilled]: (state, action) => {
			//state.isLoading = false;
			state.data = action.payload;
		},
		[fetchYoutube.rejected]: (state, action) => {
			//state.isLoading = false;
			state.data = action.payload;
		},
	},
});

export default youtubeSlice.reducer;
