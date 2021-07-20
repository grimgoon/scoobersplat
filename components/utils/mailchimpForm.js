import MailchimpSubscribe from "react-mailchimp-subscribe";
import styles from "../../styles/main.module.scss";

export default function mailchimpForm() {
  return (
    <MailchimpSubscribe
      url={
        "https://Knackelibang.us2.list-manage.com/subscribe/post?u=9a427ce69a1cdbec989deee8f&amp;id=8469e5e30e"
      }
      render={({ subscribe, status, message }) => (
        <CustomForm
          status={status}
          message={message}
          onValidated={(formData) => subscribe(formData)}
        />
      )}
    />
  );
}

const CustomForm = ({ status, message, onValidated }) => {
  let email;

  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  const messageField = (status, message) => {
    let returnMessage = <div></div>;

    if (status === "sending") {
      returnMessage = <div className={styles.emailStatus}>sending...</div>;
    } else if (status === "error") {
      console.error(`MailChimp Error: ${message}`);

      returnMessage = (
        <div
          className={styles.emailStatus}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      );
    } else if (status === "success") {
      returnMessage = (
        <div
          className={styles.emailStatus}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      );
    } else {
    }

    return returnMessage;
  };

  return (
    <div className={styles.mailchimpForm}>
      <div>
        <input
          ref={(node) => (email = node)}
          type="email"
          placeholder="Email address"
        />
        <button onClick={submit}>Submit</button>
      </div>
      {messageField(status, message)}
    </div>
  );
};
