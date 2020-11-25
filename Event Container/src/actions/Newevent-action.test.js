import React from 'react';
import { should } from 'chai'
should()
import { shallow, configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import * as actions from './Newevent-action'

configure({ adapter: new Adapter() });

describe.only('actions.ts test', () => {
    it('should return an action of type LOAD_CATEGORY', () => {
        const payload = { isBillingChanged: true }
        const action = actions.receivedCategorylist(payload);
        action.
            action.should.have.property('type', actions.LOAD_CATEGORY)
    })
});
