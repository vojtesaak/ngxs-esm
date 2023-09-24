import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { EmployeeAction } from './employee.actions';

export class EmployeeStateModel {
  public items: string[] = [];
}

const defaults = {
  items: []
};

@State<EmployeeStateModel>({
  name: 'employee',
  defaults
})
@Injectable()
export class EmployeeState {
  @Action(EmployeeAction)
  add({ getState, setState }: StateContext<EmployeeStateModel>, { payload }: EmployeeAction) {
    const state = getState();
    setState({ items: [ ...state.items, payload ] });
  }
}
