import FormDatePicker from 'components/form/FormDatePicker';
import FormTextField from 'components/form/FormTextField';
import AppButton from 'components/general/AppButton';
import { styleGuide } from 'constants/styleGuide';
import Validators from 'helpers/formValidator';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { View } from 'react-native';

const OtherScreen = () => {
  const formMethods = useForm();

  return (
    <FormProvider {...formMethods}>
      <View style={[styleGuide.flex_1, styleGuide.p1]}>
        <FormTextField
          name="test"
          label="Label"
          placeholder="Placeholder 1"
          validate={Validators([{ validation: 'required' }])}
        />
        <FormTextField
          isPassword
          placeholder="Placeholder 2"
          name="test2"
          label="Label 2"
          validate={Validators([{ validation: 'required' }])}
        />
        <FormDatePicker name="test3" label="Date" />
        <AppButton title="Submit" onPress={formMethods.handleSubmit(() => null)} />
      </View>
    </FormProvider>
  );
};

export default OtherScreen;
