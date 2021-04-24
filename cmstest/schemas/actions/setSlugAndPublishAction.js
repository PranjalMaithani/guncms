// schemas/actions/setSlugAndPublishAction.js

import { useState, useEffect } from 'react';
import { useDocumentOperation } from '@sanity/react-hooks';
import slugify from 'slugify';

export default function SetSlugAndPublishAction(props) {
  if (props.type != 'gun') {
    return null;
  }

  const { patch, publish } = useDocumentOperation(props.id, props.type);
  const [isPublishing, setIsPublishing] = useState(false);

  useEffect(() => {
    // if the isPublishing state was set to true and the draft has changed
    // to become `null` the document has been published
    if (isPublishing && !props.draft) {
      setIsPublishing(false);
    }
  }, [props.draft]);

  return {
    disabled: publish.disabled,
    label: isPublishing ? 'Publishing…' : 'Publish',
    onHandle: async () => {
      const endPublish = () => {
        // Perform the publish
        publish.execute();

        // Signal that the action is completed
        props.onComplete();
      };
      // This will update the button text
      setIsPublishing(true);

      /// Set the initial slug value to the name field
      let category = props.draft.category;
      if (!category) {
        endPublish();
        return;
      }

      let tags = [];

      if (category.type) {
        tags.push(category.type);
      }

      if (category.action) {
        category.action.forEach((tag) => {
          tags.push(tag);
        });
      }

      //Set slugs for tags (hidden in editor)
      patch.execute([
        { set: { 'category.slugs': tags.map((tag) => slugify(tag, { lower: true })) } },
      ]);
      endPublish();
    },
  };
}
