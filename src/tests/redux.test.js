import globalReducer, {getData} from '../redux/duckFolder/duckFile';

const initialState = [];
describe('test redux', () => {
  it('if is empty array', () => {
    expect(globalReducer(initialState, [])).toEqual([]);
  });

  it('if it is 3 items array', () => {
    expect(globalReducer(initialState, getData(['Andorra', 'Spain', 'Afganistan']))).toEqual(['Andorra', 'Spain', 'Afganistan']);
  });

  it('if return single item', () => {
    expect(globalReducer(initialState, getData(['Angola']))).toEqual(['Angola']);
  });
});
