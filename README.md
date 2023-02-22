# TombStoned Options

This is a quick demo of the post resurrection view options for marketplaces. The hashlist is dynamic and hosted on Shadow Drive. It will include all hashes for the TombStoned collection. All entires will have a field for "mint" (nft mint address) and a boolean for "isResurrected".

Resurrected Skeleton Hashlist Schema:

```
{
  "mint": "8ZizyoxtXa9rDfrpLW1hvq3gD6GMexKe2oyB59DH1bAW",
  "isResurrected": true,
  "original": "uri for original metadata",
  "mutated": "uri for fully mutated metadata",
  "resurrected": "uri for resurrected metadata"
}
```

Unresurrected Skeleton Hashlist Schema:

```
{
  "mint": "8ZizyoxtXa9rDfrpLW1hvq3gD6GMexKe2oyB59DH1bAW",
  "isResurrected": false,
  "current": "uri for current metadata",
}
```

The source code provides an example of an implementation using swiper js to display the three skeleton images displayed as one nft.

All attributes for mutated, resurrected and original remain the same (resurrected will have two additional fields but the describing attributes stay as they are regardless of original, resurrected, or mutated).
