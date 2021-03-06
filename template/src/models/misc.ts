export type IValidator =
  | 'accepted'
  | 'after'
  | 'after_or_equal'
  | 'alpha'
  | 'alpha_space'
  | 'alpha_num'
  | 'alpha_num_space'
  | 'alpha_num_dash'
  | 'alpha_num_dash_space'
  | 'before'
  | 'before_or_equal'
  | 'between'
  | 'boolean'
  | 'date'
  | 'email'
  | 'in'
  | 'integer'
  | 'max'
  | 'min'
  | 'maxLength'
  | 'minLength'
  | 'numeric'
  | 'phone'
  | 'required'
  | 'string'
  | 'url'
  | 'passwordConfirm'
  | 'phoneOrMailOrAlphaNum'
  | 'at_least_one_letter';
