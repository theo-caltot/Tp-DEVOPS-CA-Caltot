#!/bin/sh
git remote add cleverapps
https://$CLEVER_TOKEN:$CLEVER_SECRET@push.clever-cloud.com/app_9cf574da-6c53-4494-b75a-82af6d69c136.git
git --verbose --force push cleverapps master