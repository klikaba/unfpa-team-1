'use strict';

export var count = 0;

export function setValue(newValue: number) {
    count += newValue;
}
export function  getValue() { return count; }