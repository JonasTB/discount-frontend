export default function getValidatorErrors(err) {
    const validatorErrors = {};

    err.inner.forEach(error => {
        validatorErrors[error.path] = error.message;
    });

    return validatorErrors;
}