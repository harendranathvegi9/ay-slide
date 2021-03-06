import { Action } from '@ngrx/store';

import { Item } from '../app.model';
import { type } from '../../core/util/util';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 *
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique.
 */
export const ActionTypes = {
	SEARCH: type('[Item] Search'),
	SEARCH_COMPLETE: type('[Item] Search Complete'),
	LOAD: type('[Item] Load'),
	SELECT: type('[Item] Select'),
};


/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class SearchAction implements Action {
	type = ActionTypes.SEARCH;

	constructor(public payload: string) { }
}

export class SearchCompleteAction implements Action {
	type = ActionTypes.SEARCH_COMPLETE;

	constructor(public payload: Item[]) { }
}

export class LoadAction implements Action {
	type = ActionTypes.LOAD;

	constructor(public payload: Item) { }
}

export class SelectAction implements Action {
	type = ActionTypes.SELECT;

	constructor(public payload: string) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
	= SearchAction
	| SearchCompleteAction
	| LoadAction
	| SelectAction;
