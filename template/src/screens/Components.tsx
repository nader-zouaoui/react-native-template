import FormDatePicker from 'components/form/FormDatePicker';
import FormSelect from 'components/form/FormSelect';
import FormTextField from 'components/form/FormTextField';
import AppButton from 'components/general/AppButton';
import { styleGuide } from 'constants/styleGuide';
import Validators from 'helpers/formValidator';
import { SelectorOption } from 'models/utils';
import React, { useCallback } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { View } from 'react-native';

const SELECT_OPTIONS: SelectorOption<string>[] = [
  {
    label: 'Item 1',
    value: 'item1',
  },
  {
    label: 'Item 2',
    value: 'item2',
  },
  {
    label: 'Item 3',
    value: 'item3',
  },
];

type FormValues = {
  input: string;
  password: string;
  date: Date;
  select: string;
};

const Components = () => {
  const formMethods = useForm<FormValues>({
    defaultValues: {
      input: 'Bonsoir',
      password: 'secret-password',
      date: new Date('1997-09-19'),
      select: 'item2',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = useCallback((values) => {
    // eslint-disable-next-line no-console
    console.log({ values });
  }, []);

  return (
    <FormProvider {...formMethods}>
      <View style={[styleGuide.flex_1, styleGuide.p1]}>
        <FormTextField
          name="input"
          label="Input"
          placeholder="Placeholder 1"
          validate={Validators([{ validation: 'required' }])}
        />
        <FormTextField
          name="password"
          isPassword
          placeholder="Placeholder 2"
          label="Password"
          validate={Validators([{ validation: 'required' }])}
        />
        <FormDatePicker
          name="date"
          label="Date"
          validate={Validators([{ validation: 'required' }])}
        />
        <FormSelect
          name="select"
          label="Select"
          items={SELECT_OPTIONS}
          validate={Validators([{ validation: 'required' }])}
        />
        <AppButton title="Submit" onPress={formMethods.handleSubmit(onSubmit)} />
      </View>
    </FormProvider>
  );
};

export default Components;