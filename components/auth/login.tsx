import { useForm } from "@tanstack/react-form";
import { supabase } from "@/lib/supabase";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { login } from "@/lib/schema";
import {
  Button,
  Input,
  YStack,
  H1,
  Spinner,
  SizableText,
  Text,
  Form,
} from "tamagui";

function FieldInfo({ field }) {
  return (
    <>
      {field.state.meta.touchedErrors ? (
        <Text>{field.state.meta.touchedErrors}</Text>
      ) : null}
      {field.state.meta.isValidating ? <Text>Validating...</Text> : null}
    </>
  );
}

function showAnimation() {
  // Define your animation logic here
}

const LoginForm = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      await supabase.auth.signInWithPassword({
        email: value.email,
        password: value.password,
      });
      showAnimation();
    },
    validatorAdapter: zodValidator(login),
  });

  return (
    <YStack justifyContent="center" borderRadius="$4" padding="$2">
      <Form onSubmit={form.handleSubmit} backgroundColor="$background">
        <form.Field
          name="email"
          children={(field) => (
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
          )}
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
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <Button backgroundColor={"red"} type="submit" disabled={!canSubmit}>
              {isSubmitting ? <Spinner /> : "Log In"}
            </Button>
          )}
        />
      </Form>
    </YStack>
  );
};

export default LoginForm;
