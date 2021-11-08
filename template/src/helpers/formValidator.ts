/* eslint-disable no-useless-escape */
/* eslint-disable max-lines */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { format, isAfter, isBefore, isDate, isEqual, isValid } from 'date-fns';
import { IValidator } from 'models/misc';
import { RegisterOptions } from 'react-hook-form';
import { strings } from 'translations/translate';

const testRegex = (value: string, regex: RegExp) => {
  return value === '' || (value && value.toString().match(regex) !== null);
};
const toSentence = (arr: string[]) => {
  const lastWord = arr[arr.length - 1];

  arr.pop();
  const res = arr.join(', ');

  return `${res} ${strings.misc.or} ${lastWord}`;
};

interface IVlidatorParams {
  validation: IValidator;
  date?: Date;
  betweenParams?: number[];
  inStringArray?: string[];
  maxParams?: number;
  minParams?: number;
  passwordConfirm?: string;
}
const Validators = (params: IVlidatorParams[]): RegisterOptions => {
  let validators: RegisterOptions['validate'] = {};

  params.forEach((o) => {
    const { validation } = o;

    switch (validation) {
      case 'after':
      case 'after_or_equal':
      case 'before':
      case 'before_or_equal':
        if (o.date) {
          validators = {
            ...validators,
            [validation]: _Validators[validation](o.date),
          };
        }
        break;
      case 'between':
        if (o.betweenParams) {
          validators = {
            ...validators,
            [validation]: _Validators[validation](o.betweenParams),
          };
        }
        break;
      case 'in':
        if (o.inStringArray) {
          validators = {
            ...validators,
            [validation]: _Validators[validation](o.inStringArray),
          };
        }
        break;
      case 'max':
      case 'maxLength':
        if (o.maxParams) {
          validators = {
            ...validators,
            [validation]: _Validators[validation](o.maxParams),
          };
        }
        break;
      case 'min':
      case 'minLength':
        if (o.minParams) {
          validators = {
            ...validators,
            [validation]: _Validators[validation](o.minParams),
          };
        }
        break;
      case 'passwordConfirm':
        if (o.passwordConfirm) {
          validators = {
            ...validators,
            [validation]: _Validators[validation](o.passwordConfirm),
          };
        }
        break;
      default:
        validators = {
          ...validators,
          [validation]: _Validators[validation],
        };
        break;
    }
  });

  return { validate: validators };
};

const displayFormattedDate = (date: Date) => format(date, 'dd/MM/yyyy');

const _Validators = {
  accepted: (val: boolean) => (val === true ? undefined : strings.errorMessages.accepted),
  after: (date: Date) => (val: Date) =>
    isAfter(val, date)
      ? undefined
      : strings.formatString(strings.errorMessages.after, displayFormattedDate(date)),
  after_or_equal: (date: Date) => (val: Date) =>
    isAfter(val, date) || isEqual(val, date)
      ? undefined
      : strings.formatString(strings.errorMessages.after_or_equal, displayFormattedDate(date)),
  alpha: (val: string) =>
    testRegex(val, /^[A-Z]*$/i) ? undefined : strings.errorMessages.alpha,
  alpha_space: (val: string) =>
    testRegex(val, /^[A-Z\s]*$/i) ? undefined : strings.errorMessages.alpha_space,
  alpha_num: (val: string) =>
    testRegex(val, /^[A-Z0-9]*$/i) ? undefined : strings.errorMessages.alpha_num,
  alpha_num_space: (val: string) =>
    testRegex(val, /^[A-Z0-9\s]*$/i) ? undefined : strings.errorMessages.alpha_num_space,
  alpha_num_dash: (val: string) =>
    testRegex(val, /^[A-Z0-9_-]*$/i) ? undefined : strings.errorMessages.alpha_num_dash,
  alpha_num_dash_space: (val: string) =>
    testRegex(val, /^[A-Z0-9_-\s]*$/i)
      ? undefined
      : strings.errorMessages.alpha_num_dash_space,
  before: (date: Date) => (val: Date) =>
    isBefore(val, date)
      ? undefined
      : strings.formatString(strings.errorMessages.before, displayFormattedDate(date)),
  at_least_one_letter: (val: string) =>
    testRegex(val, /[a-zA-Z]/) ? undefined : strings.errorMessages.at_least_one_letter,

  before_or_equal: (date: Date) => (val: Date) =>
    isBefore(val, date) || isEqual(val, date)
      ? undefined
      : strings.formatString(
          strings.errorMessages.before_or_equal,
          displayFormattedDate(date),
        ),
  between: (betweenParams: number[]) => (val: string | number) =>
    parseFloat(val.toString()) >= betweenParams[0] &&
    parseFloat(val.toString()) <= betweenParams[1]
      ? undefined
      : strings.formatString(
          strings.errorMessages.between,
          betweenParams[0].toString(),
          betweenParams[1].toString(),
        ),
  boolean: (val: boolean) =>
    val === false || val === true ? undefined : strings.errorMessages.boolean,
  date: (val: any) => (isDate(val) && isValid(val) ? undefined : strings.errorMessages.date),
  email: (val: string) =>
    testRegex(val, /^[A-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)
      ? undefined
      : strings.errorMessages.email,
  in: (inStringArray: string[]) => (val: any) =>
    inStringArray.indexOf(val) > -1
      ? undefined
      : strings.formatString(strings.errorMessages.in, toSentence(inStringArray)),
  integer: (val: string) =>
    testRegex(val, /^\d*$/) ? undefined : strings.errorMessages.integer,
  max: (maxParams: number) => (val: string | number) =>
    parseFloat(val.toString()) <= maxParams
      ? undefined
      : strings.formatString(strings.errorMessages.max, maxParams.toString()),
  min: (minParams: number) => (val: string | number) =>
    val >= parseFloat(minParams.toString())
      ? undefined
      : strings.formatString(strings.errorMessages.min, minParams.toString()),
  maxLength: (maxParams: number) => (val: string) =>
    val.length <= maxParams
      ? undefined
      : strings.formatString(strings.errorMessages.maxLength, maxParams.toString()),
  minLength: (minParams: number) => (val: string) =>
    val.length >= minParams
      ? undefined
      : strings.formatString(strings.errorMessages.minLength, minParams.toString()),
  numeric: (val: string) =>
    !val || testRegex(val, /^(\d+.?\d*)?$/) ? undefined : strings.errorMessages.numeric,
  phone: (val: string) =>
    testRegex(
      val,
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
    )
      ? undefined
      : strings.errorMessages.phone,
  phoneOrMailOrAlphaNum: (val: string) =>
    testRegex(
      val,
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
    ) ||
    testRegex(val, /^[A-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i) ||
    testRegex(val, /^[A-Z0-9]*$/i)
      ? undefined
      : strings.errorMessages.phoneOrMailOrAlphaNum,
  required: (val: string | any[]) => {
    if (val instanceof Array)
      return val.length !== 0 ? undefined : strings.errorMessages.required;

    return val ? undefined : strings.errorMessages.required;
  },
  string: (val: string) =>
    typeof val === typeof 'string' ? undefined : strings.errorMessages.string,
  passwordConfirm: (passwordConfirm: string) => (val: string) =>
    val === passwordConfirm ? undefined : strings.errorMessages.passwordConfirm,
  url: (val: string) =>
    testRegex(val, /^(https?|ftp):\/\/(-\.)?([^\s/?\.#-]+\.?)+(\/[^\s]*)?$/i)
      ? undefined
      : strings.errorMessages.url,
};

export default Validators;
