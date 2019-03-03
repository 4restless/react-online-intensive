//import React from 'react';
import { Composer } from './';
//import Adapter from 'enzyme-adapter-react-16';
//import { mount, configure } from 'enzyme';

//configure({ adapter: new Adapter() });

const props = {
    _createPost:          jest.fn(),
    avatar:               'url',
    currentUserFirstName: 'User',
};

const comment = 'Happy Valentine Day!';

const initialState = {
    comment: '',
};

const updatedState = {
    comment,
};

const result = mount(<Composer { ...props } />);

const _submitCommentSpy = jest.spyOn(result.instance(), '_submitComment');
const _handleFormSubmitSpy = jest.spyOn(result.instance(), '_handleFormSubmit');
const _submitOnEnterSpy = jest.spyOn(result.instance(), '_submitOnEnter');
const _preventDefaultMock = jest.fn();

describe('composer component:', () => {
    test('should have one section tag', () => {
        expect(result.find('section')).toHaveLength(1);
    });

    test('should have one form tag', () => {
        expect(result.find('form')).toHaveLength(1);
    });

    test('should have one textarea tag', () => {
        expect(result.find('textarea')).toHaveLength(1);
    });

    test('should have one img tag', () => {
        expect(result.find('img')).toHaveLength(1);
    });

    test('should have one input tag', () => {
        expect(result.find('input')).toHaveLength(1);
    });

    test('should respond to state change property', () => {
        result.setState({
            comment,
        });
        expect(result.state()).toEqual(updatedState);
        expect(result.find('textarea').text()).toBe(comment);

        result.setState({
            comment: '',
        });
        expect(result.state()).toEqual(initialState);
        expect(result.find('textarea').text()).toBe('');
    });

    test('should handle textarea CHANGE event', () => {
        result.find('textarea').simulate('change', {
            target: {
                value: comment,
            },
        });

        expect(result.find('textarea').text()).toBe(comment);
        expect(result.state()).toEqual(updatedState);
    });

    test('should handle form SUBMIT event', () => {
        result.find('form').simulate('submit');

        expect(result.state()).toEqual(initialState);
    });

    test('_createPost prop should be invoked once after form submission', () => {
        expect(props._createPost).toHaveBeenCalledTimes(1);
    });

    test('_submitComment and _handleFormSubmit class methods should be invoked once after form is submitted', () => {
        expect(_submitCommentSpy).toHaveBeenCalledTimes(1);
        expect(_handleFormSubmitSpy).toHaveBeenCalledTimes(1);
    });

    // homework
    test('props avatar and currentUserFirstName should be strings', () => {
        expect(typeof props.avatar).toBe('string');
        expect(typeof props.currentUserFirstName).toBe('string');
    });

    test('_submitComment should return null if comment was empty', () => {
        result.setState({
            comment: '',
        });
        result.find('form').simulate('submit');
        expect(_submitCommentSpy).toHaveReturnedWith(null);
    });

    test('_submitOnEnter class methods should be invoked after not Enter key was pressed on textarea', () => {
        jest.clearAllMocks();
        result.find('textarea').simulate('keypress', {
            keyCode:        44,
            preventDefault: _preventDefaultMock,
        });

        expect(_submitOnEnterSpy).toHaveBeenCalledTimes(1);
        expect(_submitCommentSpy).toHaveBeenCalledTimes(0);
        expect(_preventDefaultMock).toHaveBeenCalledTimes(0);
    });

    test('_submitComment class methods should be invoked after key Enter was pressed on textarea', () => {
        jest.clearAllMocks();
        result.find('textarea').simulate('keypress', {
            key:            'Enter',
            preventDefault: _preventDefaultMock,
        });

        expect(_submitOnEnterSpy).toHaveBeenCalledTimes(1);
        expect(_submitCommentSpy).toHaveBeenCalledTimes(1);
        expect(_preventDefaultMock).toHaveBeenCalledTimes(1);
    });
});
