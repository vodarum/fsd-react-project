const { toCamelCase, toPascalCase } = require('../../helpers');

module.exports = (sliceName) => {
    const camelSliceName = toCamelCase(sliceName);
    const pascalSliceName = toPascalCase(sliceName);

    return `import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { State } from 'app/providers/store-provider';
// import { fetchData } from '../services';
import { ${pascalSliceName}, ${pascalSliceName}State } from '../types';

const ${camelSliceName}Adapter = createEntityAdapter<${pascalSliceName}>();

// const initialState: ${pascalSliceName}State = {};
const initialState = ${camelSliceName}Adapter.getInitialState<${pascalSliceName}State>({
    ids: [],
    entities: {},
    loading: false,
    error: undefined,
});

const ${camelSliceName}Selectors = ${camelSliceName}Adapter.getSelectors<State>(
    (state) => state.${camelSliceName} || initialState,
);

const ${camelSliceName}Slice = createSlice({
    name: '${camelSliceName}',
    initialState,
    reducers: {
        setField: (state: ${pascalSliceName}State, action: PayloadAction<string>) => {},
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchData.pending, (state) => {
    //             state.error = undefined;
    //             state.loading = true;
    //         })
    //         .addCase(fetchData.fulfilled, (state, action) => {
    //             ${camelSliceName}Adapter.setAll(state, action.payload);
    //             state.loading = false;
    //         })
    //         .addCase(fetchData.rejected, (state, action) => {
    //             state.error = action.payload;
    //             state.loading = false;
    //         });
    // },
});
    
const { actions: ${camelSliceName}Actions, reducer: ${camelSliceName}Reducer } =
    ${camelSliceName}Slice;

export { ${camelSliceName}Actions, ${camelSliceName}Reducer, ${camelSliceName}Selectors };`;
};
