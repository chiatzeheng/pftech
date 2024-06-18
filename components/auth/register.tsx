import type { FieldApi } from "@tanstack/react-form";
import { useForm } from "@tanstack/react-form";
import {
  Button,
  Input,
  SizableText,
  YStack,
  Form,
  Spinner,
  Text,
  H1,
  XStack,
} from "tamagui";
import { supabase } from "@/lib/supabase";
import { login } from "@/lib/schema";

function FieldInfo({ field }: { field: FieldApi<any, any, any, any> }) {
  return (
    <>
      {field.state.meta.touchedErrors ? (
        <Text>{field.state.meta.touchedErrors}</Text>
      ) : null}
      {field.state.meta.isValidating ? <Text>Validating...</Text> : null}
    </>
  );
}

//after login display animation
function showAnimation() {}

function Register() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      phoneNumber: "",
    },
    onSubmit: async ({ value }) => {
      await supabase.auth.signInWithPassword({
        email: value.email,
        password: value.password,
      });
      showAnimation();
    },
    validatorAdapter: login,
  });

  return (
    <YStack
      fullscreen
      justifyContent="center"
      borderRadius="$4"
      padding="$2"
      marginHorizontal="$3"
    >
      <Form
        onSubmit={() => {
          form.handleSubmit();
        }}
        backgroundColor="$background"
      >
        <form.Field
          name="email"
          children={(field) => {
            return (
              <>
                <SizableText htmlFor={field.name}>Email </SizableText>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                <FieldInfo field={field} />
              </>
            );
          }}
        />
        <form.Field
          name="password"
          children={(field) => (
            <>
              <SizableText htmlFor={field.name}>Password </SizableText>
              <Input
                id={field.name}
                name={field.name}
                type="password"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              <FieldInfo field={field} />
            </>
          )}
        />
        <form.Field
          name="pn"
          children={(field) => (
            <>
              <SizableText htmlFor={field.name}></SizableText>
              <XStack alignItems="center" space="$2">
                <Input
                  id={field.name}
                  name={field.name}
                  type="password"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </XStack>
              <FieldInfo field={field} />
            </>
          )}
        />

        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <>
              <Button
                backgroundColor={"red"}
                type="submit"
                disabled={!canSubmit}
              >
                {isSubmitting ? <Spinner /> : "Register"}
              </Button>
            </>
          )}
        />
      </Form>
    </YStack>
  );
}

export default Register;
