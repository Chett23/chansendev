/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { Experience } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function ExperienceUpdateForm(props) {
  const {
    id: idProp,
    experience: experienceModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    timeFrame: "",
    title: "",
    description: "",
    tags: [],
    subTitles: [],
    url: "",
    company: "",
    priority: "",
  };
  const [timeFrame, setTimeFrame] = React.useState(initialValues.timeFrame);
  const [title, setTitle] = React.useState(initialValues.title);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [tags, setTags] = React.useState(initialValues.tags);
  const [subTitles, setSubTitles] = React.useState(initialValues.subTitles);
  const [url, setUrl] = React.useState(initialValues.url);
  const [company, setCompany] = React.useState(initialValues.company);
  const [priority, setPriority] = React.useState(initialValues.priority);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = experienceRecord
      ? { ...initialValues, ...experienceRecord }
      : initialValues;
    setTimeFrame(cleanValues.timeFrame);
    setTitle(cleanValues.title);
    setDescription(cleanValues.description);
    setTags(cleanValues.tags ?? []);
    setCurrentTagsValue("");
    setSubTitles(cleanValues.subTitles ?? []);
    setCurrentSubTitlesValue("");
    setUrl(cleanValues.url);
    setCompany(cleanValues.company);
    setPriority(cleanValues.priority);
    setErrors({});
  };
  const [experienceRecord, setExperienceRecord] =
    React.useState(experienceModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Experience, idProp)
        : experienceModelProp;
      setExperienceRecord(record);
    };
    queryData();
  }, [idProp, experienceModelProp]);
  React.useEffect(resetStateValues, [experienceRecord]);
  const [currentTagsValue, setCurrentTagsValue] = React.useState("");
  const tagsRef = React.createRef();
  const [currentSubTitlesValue, setCurrentSubTitlesValue] = React.useState("");
  const subTitlesRef = React.createRef();
  const validations = {
    timeFrame: [],
    title: [],
    description: [],
    tags: [],
    subTitles: [],
    url: [],
    company: [],
    priority: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          timeFrame,
          title,
          description,
          tags,
          subTitles,
          url,
          company,
          priority,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            Experience.copyOf(experienceRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ExperienceUpdateForm")}
      {...rest}
    >
      <TextField
        label="Time frame"
        isRequired={false}
        isReadOnly={false}
        value={timeFrame}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              timeFrame: value,
              title,
              description,
              tags,
              subTitles,
              url,
              company,
              priority,
            };
            const result = onChange(modelFields);
            value = result?.timeFrame ?? value;
          }
          if (errors.timeFrame?.hasError) {
            runValidationTasks("timeFrame", value);
          }
          setTimeFrame(value);
        }}
        onBlur={() => runValidationTasks("timeFrame", timeFrame)}
        errorMessage={errors.timeFrame?.errorMessage}
        hasError={errors.timeFrame?.hasError}
        {...getOverrideProps(overrides, "timeFrame")}
      ></TextField>
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              timeFrame,
              title: value,
              description,
              tags,
              subTitles,
              url,
              company,
              priority,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              timeFrame,
              title,
              description: value,
              tags,
              subTitles,
              url,
              company,
              priority,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              timeFrame,
              title,
              description,
              tags: values,
              subTitles,
              url,
              company,
              priority,
            };
            const result = onChange(modelFields);
            values = result?.tags ?? values;
          }
          setTags(values);
          setCurrentTagsValue("");
        }}
        currentFieldValue={currentTagsValue}
        label={"Tags"}
        items={tags}
        hasError={errors?.tags?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("tags", currentTagsValue)
        }
        errorMessage={errors?.tags?.errorMessage}
        setFieldValue={setCurrentTagsValue}
        inputFieldRef={tagsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Tags"
          isRequired={false}
          isReadOnly={false}
          value={currentTagsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.tags?.hasError) {
              runValidationTasks("tags", value);
            }
            setCurrentTagsValue(value);
          }}
          onBlur={() => runValidationTasks("tags", currentTagsValue)}
          errorMessage={errors.tags?.errorMessage}
          hasError={errors.tags?.hasError}
          ref={tagsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "tags")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              timeFrame,
              title,
              description,
              tags,
              subTitles: values,
              url,
              company,
              priority,
            };
            const result = onChange(modelFields);
            values = result?.subTitles ?? values;
          }
          setSubTitles(values);
          setCurrentSubTitlesValue("");
        }}
        currentFieldValue={currentSubTitlesValue}
        label={"Sub titles"}
        items={subTitles}
        hasError={errors?.subTitles?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("subTitles", currentSubTitlesValue)
        }
        errorMessage={errors?.subTitles?.errorMessage}
        setFieldValue={setCurrentSubTitlesValue}
        inputFieldRef={subTitlesRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Sub titles"
          isRequired={false}
          isReadOnly={false}
          value={currentSubTitlesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.subTitles?.hasError) {
              runValidationTasks("subTitles", value);
            }
            setCurrentSubTitlesValue(value);
          }}
          onBlur={() => runValidationTasks("subTitles", currentSubTitlesValue)}
          errorMessage={errors.subTitles?.errorMessage}
          hasError={errors.subTitles?.hasError}
          ref={subTitlesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "subTitles")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Url"
        isRequired={false}
        isReadOnly={false}
        value={url}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              timeFrame,
              title,
              description,
              tags,
              subTitles,
              url: value,
              company,
              priority,
            };
            const result = onChange(modelFields);
            value = result?.url ?? value;
          }
          if (errors.url?.hasError) {
            runValidationTasks("url", value);
          }
          setUrl(value);
        }}
        onBlur={() => runValidationTasks("url", url)}
        errorMessage={errors.url?.errorMessage}
        hasError={errors.url?.hasError}
        {...getOverrideProps(overrides, "url")}
      ></TextField>
      <TextField
        label="Company"
        isRequired={false}
        isReadOnly={false}
        value={company}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              timeFrame,
              title,
              description,
              tags,
              subTitles,
              url,
              company: value,
              priority,
            };
            const result = onChange(modelFields);
            value = result?.company ?? value;
          }
          if (errors.company?.hasError) {
            runValidationTasks("company", value);
          }
          setCompany(value);
        }}
        onBlur={() => runValidationTasks("company", company)}
        errorMessage={errors.company?.errorMessage}
        hasError={errors.company?.hasError}
        {...getOverrideProps(overrides, "company")}
      ></TextField>
      <TextField
        label="Priority"
        isRequired={false}
        isReadOnly={false}
        value={priority}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              timeFrame,
              title,
              description,
              tags,
              subTitles,
              url,
              company,
              priority: value,
            };
            const result = onChange(modelFields);
            value = result?.priority ?? value;
          }
          if (errors.priority?.hasError) {
            runValidationTasks("priority", value);
          }
          setPriority(value);
        }}
        onBlur={() => runValidationTasks("priority", priority)}
        errorMessage={errors.priority?.errorMessage}
        hasError={errors.priority?.hasError}
        {...getOverrideProps(overrides, "priority")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || experienceModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || experienceModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
